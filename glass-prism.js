(() => {
  const NR = 16;
  const HEADLINE = "Your future isn't one path.";
  const FONT = '600 100px "Geist", sans-serif';
  const COLORS = new Float32Array(Array.from({ length: NR }, (_, i) => {
    const l = 700 - i * (300 / (NR - 1));
    const g = (x, m, s) => Math.exp(-(((x - m) / s) ** 2));
    let r = g(l, 610, 55) + 0.35 * g(l, 415, 28);
    let green = g(l, 540, 50);
    const b = g(l, 455, 38);
    const blue = g(l, 455, 22);
    r += blue * 0.12;
    green -= blue * 0.1;
    const max = Math.max(r, green, b, 1e-3);
    return [(r / max) * 0.9 + 0.1 * r, (green / max) * 0.9 + 0.1 * green, b / max];
  }).flat());
  const IOR = Array.from({ length: NR }, (_, i) => {
    const wavelength = 700 - i * (300 / (NR - 1));
    return 1.33 + 0.03 / (wavelength / 1000) ** 2;
  });

  const FS = `precision highp float;
#define NR 16
uniform vec2 uRes;uniform float uDpr,uT,uDark,uFade,uTime;
uniform vec3 uBg,uFg;
uniform sampler2D uText;
uniform vec2 uV0,uV1,uV2;
uniform float uRound;
uniform vec2 uDepth;
uniform vec2 uS,uE,uDir0;
uniform vec2 uX[NR];uniform vec2 uD[NR];uniform float uOk[NR];uniform vec3 uC[NR];
uniform vec2 uShift;
uniform vec2 uC0;
uniform float uHeadIn,uFanLen;

float sdTri(vec2 p,vec2 p0,vec2 p1,vec2 p2){
  vec2 e0=p1-p0,e1=p2-p1,e2=p0-p2,v0=p-p0,v1=p-p1,v2=p-p2;
  vec2 pq0=v0-e0*clamp(dot(v0,e0)/dot(e0,e0),0.,1.);
  vec2 pq1=v1-e1*clamp(dot(v1,e1)/dot(e1,e1),0.,1.);
  vec2 pq2=v2-e2*clamp(dot(v2,e2)/dot(e2,e2),0.,1.);
  float s=sign(e0.x*e2.y-e0.y*e2.x);
  vec2 d=min(min(vec2(dot(pq0,pq0),s*(v0.x*e0.y-v0.y*e0.x)),vec2(dot(pq1,pq1),s*(v1.x*e1.y-v1.y*e1.x))),vec2(dot(pq2,pq2),s*(v2.x*e2.y-v2.y*e2.x)));
  return -sqrt(d.x)*sign(d.y);
}
float prism(vec2 p){return sdTri(p,uV0,uV1,uV2)-uRound;}
float seg(vec2 p,vec2 a,vec2 b){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h);}
float dotMask(vec2 p){vec2 g=vec2(20.,13.);vec2 q=mod(p+vec2(6.,1.)+g*.5,g)-g*.5;return 1.-smoothstep(.45,1.15,length(q));}
vec3 scene(vec2 p){
  vec3 c=uBg;
  c=mix(c,uFg,(uDark>.5?.12:.14)*dotMask(p));
  float t=texture2D(uText,clamp(p/uRes,0.,1.)).a;
  return mix(c,uFg,t*.97);
}
vec3 beams(vec2 p,out float white){
  vec3 L=vec3(0.);white=0.;
  vec2 head=uS+uDir0*uHeadIn;
  float di=seg(p,uS,head);
  float wi=exp(-di*di/1.6)+.16*exp(-di*di/120.);
  white=wi;L+=vec3(wi);
  for(int i=0;i<NR;i++){
    if(uOk[i]<.5)continue;
    vec2 q=p-uX[i];float t=dot(q,uD[i]);
    if(t<0.)continue;
    float d=abs(q.x*uD[i].y-q.y*uD[i].x);
    float w=1.2+t*.022;
    float f=(exp(-d*d/(w*w))+.22*exp(-d*d/(w*w*16.)))*smoothstep(uFanLen,uFanLen-120.,t)/(1.+t*.0011);
    L+=uC[i]*f*(2.4/float(NR));
  }
  return L*uFade;
}
vec3 inner(vec2 p){
  vec3 L=vec3(0.);
  if(uFanLen<=0.)return L;
  for(int i=0;i<NR;i++){if(uOk[i]<.5)continue;float d=seg(p,uE,uX[i]);L+=mix(vec3(1.),uC[i],.75)*exp(-d*d/3.)*(.9/float(NR));}
  float de=length(p-uE);L+=vec3(1.)*exp(-de*de/90.)*.55;
  return L*uFade;
}
void main(){
  vec2 p=vec2(gl_FragCoord.x,uRes.y*uDpr-gl_FragCoord.y)/uDpr;
  float aa=.8/uDpr+.35;
  float dF=prism(p);
  float dH=dF;for(int k=1;k<=4;k++){dH=min(dH,prism(p-uDepth*float(k)*.25));}
  vec3 col;
  float wb;vec3 B=beams(p,wb);
  vec3 outside=scene(p);
  float dm=dotMask(p);
  if(uDark>.5){outside+=B*(.2+2.6*dm);}
  else{float I=max(B.r,max(B.g,B.b));vec3 hue=B/max(I,1e-4);hue=mix(hue,vec3(.32),wb/max(I,1e-4)*.9);outside=mix(outside,hue*.92,clamp(I*(.3+1.7*dm),0.,.85));}
  vec3 side=scene(p-uDepth*.6)*(uDark>.5?.92:.97)+(uDark>.5?.028:-.015);
  if(uDark>.5)side+=B*.25;
  col=mix(side,outside,smoothstep(-aa,aa,dH));
  if(dF<2.){
    float e=1.;
    vec2 g=vec2(prism(p+vec2(e,0.))-prism(p-vec2(e,0.)),prism(p+vec2(0.,e))-prism(p-vec2(0.,e)));g=g/max(length(g),1e-4);
    float bevel=16.;float h=clamp(-dF/bevel,0.,1.);float slope=pow(1.-h,1.6);
    vec3 N=normalize(vec3(g*slope*1.35,1.));
    vec2 off=-N.xy*30.-(p-uC0)*.22+uShift;
    vec3 refr=vec3(scene(p+off*1.).r,scene(p+off*1.07).g,scene(p+off*1.15).b);
    vec3 glass=refr*(uDark>.5?vec3(.9,.92,1.):vec3(.96,.97,1.))+(uDark>.5?.03:.0);
    float fr=pow(1.-N.z,1.5);
    vec3 Ld=normalize(vec3(-uDir0,.9));vec3 H=normalize(Ld+vec3(0.,0.,1.));
    float sp=pow(max(dot(N,H),0.),48.);
    float band=exp(-pow(dot(p-uC0,vec2(.8,-.6))/(length(uV0-uC0)*.22)-.35,2.));
    vec3 iri=.5+.5*cos(6.2831*(dot(p-uC0,vec2(.004,.003))+vec3(0.,.33,.67)));
    glass+=vec3(1.)*(fr*.3+sp*.85+band*(uDark>.5?.05:.03))+iri*fr*(uDark>.5?.14:.08);
    if(uDark<.5)glass-=vec3(fr*.10);
    vec3 IN=inner(p);
    if(uDark>.5)glass+=IN;
    else{float I=max(IN.r,max(IN.g,IN.b));vec3 hue=IN/max(I,1e-4);hue=mix(vec3(.45),hue,clamp((I-min(IN.r,min(IN.g,IN.b)))/max(I,1e-4)*2.,0.,1.));glass=mix(glass,hue*.85,clamp(I*.7,0.,.7));}
    col=mix(glass,col,smoothstep(-aa,aa,dF));
  }
  vec2 b0=uV0+uDepth,b1=uV1+uDepth,b2=uV2+uDepth;
  vec3 lineC=uDark>.5?vec3(1.):vec3(0.);
  float ef=abs(dF);float lf=1.-smoothstep(.0,aa*1.6,ef);
  float eb=min(min(seg(p,b0,b1),seg(p,b1,b2)),seg(p,b2,b0))-uRound;eb=abs(eb);float lb=1.-smoothstep(0.,aa*1.6,eb);
  float ec=min(min(seg(p,uV0+normalize(uV0-uC0)*uRound,b0+normalize(uV0-uC0)*uRound),seg(p,uV1+normalize(uV1-uC0)*uRound,b1+normalize(uV1-uC0)*uRound)),seg(p,uV2+normalize(uV2-uC0)*uRound,b2+normalize(uV2-uC0)*uRound));float lc=1.-smoothstep(.2,.2+aa*1.6,ec);
  col=mix(col,lineC,lb*(uDark>.5?.16:.14));
  col=mix(col,lineC,lc*(uDark>.5?.22:.18));
  col=mix(col,lineC,lf*(uDark>.5?.55:.45));
  gl_FragColor=vec4(col,1.);
}`;

  const VS = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const mul = (a, s) => [a[0] * s, a[1] * s];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
  const norm = (a) => {
    const len = Math.hypot(a[0], a[1]) || 1;
    return [a[0] / len, a[1] / len];
  };

  function hitEdges(origin, direction, vertices, skip) {
    let best = null;
    for (let k = 0; k < 3; k += 1) {
      if (k === skip) continue;
      const a = vertices[k];
      const edge = sub(vertices[(k + 1) % 3], a);
      const denominator = direction[0] * edge[1] - direction[1] * edge[0];
      if (Math.abs(denominator) < 1e-9) continue;
      const w = sub(a, origin);
      const t = (w[0] * edge[1] - w[1] * edge[0]) / denominator;
      const u = (w[0] * direction[1] - w[1] * direction[0]) / denominator;
      if (t > 1e-4 && u >= 0 && u <= 1 && (!best || t < best.t)) {
        best = { t, k, p: add(origin, mul(direction, t)) };
      }
    }
    return best;
  }

  function outward(vertices, index, center) {
    const a = vertices[index];
    const b = vertices[(index + 1) % 3];
    let normal = norm([b[1] - a[1], -(b[0] - a[0])]);
    if (dot(normal, sub(a, center)) < 0) normal = mul(normal, -1);
    return normal;
  }

  function refract(direction, normal, eta) {
    const ci = -dot(normal, direction);
    const k = 1 - eta * eta * (1 - ci * ci);
    if (k < 0) return null;
    return norm(add(mul(direction, eta), mul(normal, eta * ci - Math.sqrt(k))));
  }

  function readColor(css) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.fillStyle = "#000";
    context.fillStyle = css;
    context.fillRect(0, 0, 1, 1);
    const pixel = context.getImageData(0, 0, 1, 1).data;
    return [pixel[0] / 255, pixel[1] / 255, pixel[2] / 255];
  }

  function initialize() {
    const canvas = document.querySelector("#prism-atmosphere");
    const section = document.querySelector("#home");
    const stage = document.querySelector("#prism-stage");
    const copy = document.querySelector(".prism-copy");
    const hint = document.querySelector("#prism-scroll-hint");
    const hintLabel = document.querySelector("#prism-scroll-label");
    const replayButton = document.querySelector("#prism-replay");
    const gl = canvas.getContext("webgl", {
      antialias: false,
      premultipliedAlpha: false,
      alpha: false
    });

    if (!gl || gl.isContextLost()) {
      document.body.classList.add("prism-webgl-fallback");
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Glass prism shader compilation failed:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compile(gl.VERTEX_SHADER, VS);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, FS);
    const program = gl.createProgram();
    if (!vertexShader || !fragmentShader || !program) {
      document.body.classList.add("prism-webgl-fallback");
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Glass prism program linking failed:", gl.getProgramInfoLog(program));
      document.body.classList.add("prism-webgl-fallback");
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const attribute = gl.getAttribLocation(program, "a");
    gl.enableVertexAttribArray(attribute);
    gl.vertexAttribPointer(attribute, 2, gl.FLOAT, false, 0, 0);

    const uniformNames = [
      "uRes", "uDpr", "uT", "uDark", "uFade", "uTime", "uBg", "uFg", "uText",
      "uV0", "uV1", "uV2", "uRound", "uDepth", "uS", "uE", "uDir0", "uX",
      "uD", "uOk", "uC", "uShift", "uC0", "uHeadIn", "uFanLen"
    ];
    const uniforms = Object.fromEntries(uniformNames.map((name) => [name, gl.getUniformLocation(program, name)]));
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.uniform3fv(uniforms.uC, COLORS);
    gl.uniform1i(uniforms.uText, 0);

    const textCanvas = document.createElement("canvas");
    const textContext = textCanvas.getContext("2d");
    let W = 0;
    let H = 0;
    let DPR = 1;
    let textBottom = 0;
    let background = [7 / 255, 9 / 255, 12 / 255];
    let foreground = [1, 1, 1];
    let dark = true;
    let src = 0.3;
    let angle = 0;
    let tilt = [0, 0];
    let scrollProgress = 0;
    let t0 = performance.now();
    let isReady = false;
    let readyTimer = 0;
    let animationFrame = 0;
    let resizeTimer = 0;
    let frameNo = 0;
    let alive = true;
    let visible = true;
    let textActive = false;
    const mouse = { x: 0.5, y: 0.5, on: false };
    const resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 120);
    });
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !animationFrame && !document.hidden) {
        animationFrame = window.requestAnimationFrame(frame);
      }
    });

    function readTheme() {
      const styles = getComputedStyle(stage);
      background = readColor(styles.getPropertyValue("--prism-background").trim() || "#07090c");
      foreground = readColor(styles.color);
      dark = 0.2126 * background[0] + 0.7152 * background[1] + 0.0722 * background[2] < 0.5;
    }

    function drawText() {
      textCanvas.width = Math.max(1, Math.round(W * DPR));
      textCanvas.height = Math.max(1, Math.round(H * DPR));
      const context = textContext;
      context.setTransform(DPR, 0, 0, DPR, 0, 0);
      context.clearRect(0, 0, W, H);
      if (!textActive) {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
        return;
      }

      const stageHeight = H;
      const font = (size) => `600 ${size}px Geist, sans-serif`;
      const words = HEADLINE.split(/\s+/);
      let size = Math.min(W * 0.085, stageHeight * 0.14, 128);
      let lines = [];
      for (;;) {
        context.font = font(size);
        context.letterSpacing = `${-size * 0.05}px`;
        lines = [];
        let current = "";
        for (const word of words) {
          const candidate = current ? `${current} ${word}` : word;
          if (context.measureText(candidate).width > W * 0.88 && current) {
            lines.push(current);
            current = word;
          } else {
            current = candidate;
          }
        }
        lines.push(current);
        if ((lines.length <= 2 && lines.every((line) => context.measureText(line).width <= W * 0.9)) || size < 28) break;
        size *= 0.92;
      }
      context.font = font(size);
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = "#fff";
      context.letterSpacing = `${-size * 0.05}px`;
      const lineHeight = size;
      const top = stageHeight * 0.29 - ((lines.length - 1) * lineHeight) / 2;
      lines.forEach((line, index) => context.fillText(line, W / 2, top + index * lineHeight));
      textBottom = stageHeight * 0.29 - ((lines.length - 1) * lineHeight) / 2
        + (lines.length - 1) * lineHeight + size * 0.36;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
    }

    function resize() {
      const rect = stage.getBoundingClientRect();
      W = Math.max(1, rect.width);
      H = Math.max(1, rect.height);
      DPR = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      gl.viewport(0, 0, canvas.width, canvas.height);
      drawText();
    }

    function geometry() {
      const stageHeight = H;
      const R = Math.min(W * 0.15, stageHeight * 0.22, 200);
      const center = [
        W * 0.5,
        Math.min(stageHeight * 0.56, Math.max(stageHeight * 0.46, textBottom + R * 0.72))
      ];
      const a = angle + 0.4;
      const vertices = [0, 1, 2].map((k) => {
        const t = a + (k * 2 * Math.PI) / 3;
        return [center[0] + R * Math.sin(t), center[1] - R * Math.cos(t)];
      });
      const radius = Math.max(4, R * 0.045);
      const roundedVertices = vertices.map((vertex) => add(center, mul(sub(vertex, center), 1 - (2 * radius) / R)));
      const source = [-60, stageHeight * src];
      const direction = norm(sub([center[0] - R * 0.4, center[1] - R * 0.2], source));
      const hit = hitEdges(source, direction, vertices, -1);
      const points = [];
      const directions = [];
      const ok = [];
      for (let i = 0; i < NR; i += 1) {
        let good = 0;
        let point = [0, 0];
        let rayDirection = [1, 0];
        if (hit) {
          let ray = refract(direction, outward(vertices, hit.k, center), 1 / IOR[i]);
          let origin = hit.p;
          let skip = hit.k;
          for (let bounce = 0; bounce < 4 && ray; bounce += 1) {
            const edge = hitEdges(origin, ray, vertices, skip);
            if (!edge) break;
            const normal = outward(vertices, edge.k, center);
            const exit = refract(ray, mul(normal, -1), IOR[i]);
            if (exit) {
              point = edge.p;
              rayDirection = exit;
              good = 1;
              break;
            }
            ray = norm(sub(ray, mul(normal, 2 * dot(ray, normal))));
            origin = edge.p;
            skip = edge.k;
          }
        }
        points.push(point[0], point[1]);
        directions.push(rayDirection[0], rayDirection[1]);
        ok.push(good);
      }
      return {
        R,
        center,
        roundedVertices,
        radius,
        source,
        direction,
        entry: hit ? hit.p : center,
        points,
        directions,
        ok,
        stageHeight
      };
    }

    function updateCopy() {
      copy.style.opacity = isReady ? String(Math.max(0, 1 - scrollProgress * 1.6)) : "";
      const up = scrollProgress > 0.85;
      hint.dataset.up = up ? "true" : "false";
      hintLabel.textContent = up ? "Scroll up" : "Scroll to rotate";
      hint.style.opacity = isReady ? String(up ? 1 : Math.max(0, 1 - scrollProgress * 5)) : "0";
    }

    function onScroll() {
      const outer = section.getBoundingClientRect();
      scrollProgress = Math.min(1, Math.max(0, -outer.top / (window.innerHeight * 0.7)));
      const active = outer.bottom > 0 && outer.top < window.innerHeight;
      if (active !== textActive) {
        textActive = active;
        drawText();
      }
      updateCopy();
    }

    function replay() {
      if (scrollProgress > 0) section.scrollIntoView({ block: "start", behavior: reducedMotion ? "instant" : "smooth" });
      t0 = performance.now();
      isReady = false;
      stage.classList.remove("is-ready");
      updateCopy();
      window.clearTimeout(readyTimer);
      readyTimer = window.setTimeout(() => {
        isReady = true;
        stage.classList.add("is-ready");
        updateCopy();
      }, reducedMotion ? 0 : 1500);
    }

    function frame(now) {
      animationFrame = 0;
      if (!alive) return;
      if (!reducedMotion && visible && !document.hidden) animationFrame = window.requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      if (frameNo++ % 30 === 0) readTheme();
      const time = reducedMotion ? 99 : (now - t0) / 1000;
      const targetAngle = reducedMotion
        ? 0
        : (mouse.on ? (mouse.x - 0.5) * 0.2 : 0) + scrollProgress * 1.35;
      const targetSource = reducedMotion
        ? 0.3
        : mouse.on
        ? 0.2 + Math.min(1, Math.max(0, mouse.y / 0.8)) * 0.3
        : 0.3 + Math.sin((now / 1000) * 0.45) * 0.04;
      const targetTilt = !reducedMotion && mouse.on
        ? [(mouse.x - 0.5) * 16, (mouse.y - 0.5) * 10]
        : [0, 0];
      angle += (targetAngle - angle) * 0.06;
      src += (targetSource - src) * 0.05;
      tilt = [
        tilt[0] + (targetTilt[0] - tilt[0]) * 0.06,
        tilt[1] + (targetTilt[1] - tilt[1]) * 0.06
      ];

      const G = geometry();
      const localVertices = G.roundedVertices;
      const fanLength = Math.hypot(W, H) * 1.2 + 120;
      const incomingLength = Math.hypot(G.entry[0] - G.source[0], G.entry[1] - G.source[1]);
      const ease = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
      gl.uniform2f(uniforms.uRes, W, H);
      gl.uniform1f(uniforms.uDpr, DPR);
      gl.uniform1f(uniforms.uT, time);
      gl.uniform1f(uniforms.uDark, dark ? 1 : 0);
      gl.uniform1f(uniforms.uFade, reducedMotion ? 1 : 0.96 + 0.04 * Math.sin((now / 1000) * 2.1));
      gl.uniform1f(uniforms.uTime, now / 1000);
      gl.uniform3fv(uniforms.uBg, background);
      gl.uniform3fv(uniforms.uFg, foreground);
      gl.uniform2fv(uniforms.uV0, localVertices[0]);
      gl.uniform2fv(uniforms.uV1, localVertices[1]);
      gl.uniform2fv(uniforms.uV2, localVertices[2]);
      gl.uniform1f(uniforms.uRound, G.radius);
      gl.uniform2f(uniforms.uDepth, G.R * 0.12 + tilt[0], -G.R * 0.13 + tilt[1]);
      gl.uniform2fv(uniforms.uC0, G.center);
      gl.uniform2fv(uniforms.uS, G.source);
      gl.uniform2fv(uniforms.uE, G.entry);
      gl.uniform2fv(uniforms.uDir0, G.direction);
      gl.uniform2fv(uniforms.uX, G.points);
      gl.uniform2fv(uniforms.uD, G.directions);
      gl.uniform1fv(uniforms.uOk, G.ok);
      const shiftAngle = angle + 0.6;
      gl.uniform2f(uniforms.uShift, Math.cos(shiftAngle) * G.R * 0.04, Math.sin(shiftAngle) * G.R * 0.03);
      gl.uniform1f(uniforms.uHeadIn, incomingLength * ease(time / 0.9));
      gl.uniform1f(uniforms.uFanLen, time < 0.9 ? 0 : fanLength * ease((time - 0.9) / 1.4));
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    const onPointerMove = (event) => {
      const rect = stage.getBoundingClientRect();
      mouse.x = (event.clientX - rect.left) / rect.width;
      mouse.y = (event.clientY - rect.top) / rect.height;
      mouse.on = true;
    };
    const onPointerLeave = () => {
      mouse.on = false;
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
      } else {
        animationFrame = window.requestAnimationFrame(frame);
      }
    };
    const onPageHide = () => {
      alive = false;
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(readyTimer);
      window.clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      replayButton.removeEventListener("click", replay);
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };

    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", onPageHide, { once: true });
    replayButton.addEventListener("click", replay);
    resizeObserver.observe(stage);
    intersectionObserver.observe(stage);
    document.body.classList.add("prism-webgl-ready");

    const start = () => {
      if (!alive) return;
      readTheme();
      resize();
      onScroll();
      replay();
      animationFrame = window.requestAnimationFrame(frame);
    };
    if (document.fonts && document.fonts.load) {
      document.fonts.load(FONT).then(start, start);
    } else {
      start();
    }
  }

  initialize();
})();

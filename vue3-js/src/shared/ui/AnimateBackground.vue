<script setup>
import { ref, onMounted } from 'vue';

const cursorBlob = ref(null);

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    if (!cursorBlob.value) return;

    cursorBlob.value.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
  });
});
</script>

<template>
  <div class="bg">
    <!-- floating blobs -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

    <!-- cursor blob -->
    <div ref="cursorBlob" class="blob cursorBlob"></div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.bg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* BLOBS */

.blob {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.7;
  mix-blend-mode: screen;
}

/* STATIC BLOBS */

.blob1 {
  background: radial-gradient(circle, #ff4fd8, transparent 70%);
  top: -200px;
  left: -100px;
  animation: float1 20s infinite alternate ease-in-out;
}

.blob2 {
  background: radial-gradient(circle, #7a4dff, transparent 70%);
  top: 40%;
  right: -200px;
  animation: float2 4s infinite alternate ease-in-out;
}

.blob3 {
  background: radial-gradient(circle, #ff79f2, transparent 70%);
  bottom: -200px;
  left: 40%;
  animation: float3 7s infinite alternate ease-in-out;
}

/* CURSOR BLOB */

.cursorBlob {
  background: radial-gradient(circle, #b76cff, transparent 70%);
  pointer-events: none;
  transition: transform 0.15s linear;
}

/* ANIMATIONS */

@keyframes float1 {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(200px, -120px) scale(1.2);
  }
}

@keyframes float2 {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(-150px, 100px) scale(1.25);
  }
}

@keyframes float3 {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(120px, -180px) scale(1.2);
  }
}

/* CONTENT */

.content {
  position: relative;
  z-index: 2;
}
</style>

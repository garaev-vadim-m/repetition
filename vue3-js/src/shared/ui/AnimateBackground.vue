<script setup></script>

<template>
  <div class="bg">
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

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
  filter: blur(160px);
  opacity: 0.7;
  animation: blobMove 25s infinite alternate ease-in-out;
}

.blob1 {
  background: radial-gradient(circle, #ff4fd8, transparent 70%);
  top: -100px;
  left: -100px;
}

.blob2 {
  background: radial-gradient(circle, #7a4dff, transparent 70%);
  top: 30%;
  right: -100px;
  animation-duration: 2s;
}

.blob3 {
  background: radial-gradient(circle, #ff79f2, transparent 70%);
  bottom: -200px;
  left: 35%;
  animation-duration: 3s;
}

/* ANIMATION */

@keyframes blobMove {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(150px, -120px) scale(1.35);
  }
}

/* CONTENT */

.content {
  position: relative;
  z-index: 2;
}
</style>

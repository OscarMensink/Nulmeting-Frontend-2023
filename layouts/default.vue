<template>
	<div class="layout-wrapper">
		<LevGlobalLoader v-if="globalStore.loading"></LevGlobalLoader>
		<div class="application-wrapper">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const globalStore = useGlobalStore();
</script>

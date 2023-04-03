<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-img
          src="logo.png"
          :fit="scale - down"
          style="width: 45px; height: 30px"
        />

        <q-toolbar-title> Wingardium Legosa </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script></script>

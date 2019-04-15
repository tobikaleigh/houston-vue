<template>
  <div>
    <div class="flex mt-8 -mx-2">
      <div class="w-1/3 px-2">
        <div class="box">
          <p class="font-bold">This week</p>
          <p class="font-bold text-xl text-green-light mt-2">
            <i class="fa fa-clock"></i> 17h 24m
            <span class="float-right"></span>  
          </p>
        </div>
      </div>
      <div class="w-1/3 px-2">
        <div class="box">
          <p class="font-bold">This month</p>
          <p class="font-bold text-xl text-green-light mt-2">
            <i class="fa fa-clock"></i> 17h 24m
            <span class="float-right"></span>  
          </p>
        </div>
      </div>
      <div class="w-1/3 px-2">
        <div class="box">
          <p class="font-bold">This year</p>
          <p class="font-bold text-xl text-green-light mt-2">
            <i class="fa fa-clock"></i> 17h 24m
            <span class="float-right"></span>  
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.box {
  @apply .w-full .bg-blue-darkest .py-8 .px-6;
}
</style>


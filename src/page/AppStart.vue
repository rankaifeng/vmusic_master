<template>
    <div class="start_bg">
        <span class="countdown" @click="jumpClick">
          {{countdownNum == 0 ? "立即体验":
          countdownNum}}
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countdownNum: 5,
            canClick: false
        };
    },
    created() {
        let { countdownNum } = this;
        let startTime = window.setInterval(() => {
            countdownNum--;
            this.countdownNum = countdownNum;
            if (countdownNum == 0) {
                window.clearInterval(startTime);
                this.canClick = true;
            }
        }, 1000);
    },
    methods: {
        jumpClick() {
            if (!this.canClick) {
                return;
            }
            window.console.log(this.$router);
            
            this.$router.push({
                path: "/login"
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import "../style/mixins.less";
.start_bg {
    .bg_img("../imgs/start.jpg");
    .countdown {
        width: @countdownW;
        height: @countdownH;
        text-align: center;
        line-height: @countdownH;
        .positioning();
        border-radius: 0.6rem;
        background: @blue;
    }
}
</style>
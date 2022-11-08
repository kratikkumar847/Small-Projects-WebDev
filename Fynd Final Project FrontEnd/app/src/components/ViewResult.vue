<template>
    <div class="container">
        <div class="row justify-content-center align-items-center inner-row">
            <div class="col-md-5">
                <div class="form-box p-5">
                    <div class="form-title">
                        <h2 class="fw-bold mb-3">View Your Result</h2>
                    </div>
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control form-control-sm" placeholder="Enter Enrolment Number" id="floatingNumber">
                            <label for="floatingNumber">Enrolment Number</label>
                        </div>
                        <div class="mt-3">
                            <button class="btn primaryBg text-white">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name : 'ViewResult'
    }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Roboto:300);

    body {
        font-family: 'Roboto';
        background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
    }

    .inner-row {
        height: 100vh;
    }

    .primaryBg{
        background: rgba(141,194,111,1);
    }

    .primaryColor{
        color: rgba(141, 194, 111, 1);
    }

    .form-box{
        background: #fff;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24) ;
    }

</style>
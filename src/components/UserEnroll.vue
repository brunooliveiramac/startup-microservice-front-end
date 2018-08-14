<template>
    <div class="container enroll">
        <form>
            <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="cpf" placeholder="CPF">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="email" placeholder="E-mail">
            </div>
            <button class="btn btn-outline-primary btn-job">
                Confirm
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "user-enroll"
    }
</script>

<style scoped>

</style>

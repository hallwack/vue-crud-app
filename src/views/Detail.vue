<template>
    <div class="container my-3">
        <div class="row justify-content-center">
            <div class="col-10">
                <router-link
                    :to="{ name: 'index' }"
                    class="btn btn-primary rounded shadow my-3"
                    >Back</router-link
                >
                <div class="card rounded shadow">
                    <div class="card-header">
                        <h3>Detail Product</h3>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ products.name }}
                        </h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            Price: {{ products.price }}
                        </h6>
                        <p class="card-text">
                            {{ products.description }}
                        </p>
                        <p class="card-text">
                            <small class="text-muted"
                                >Quantity: {{ products.quantity }}</small
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
    setup() {
        let products = reactive({
            name: "",
            description: "",
            price: "",
            quantity: "",
        });

        const route = useRoute();

        onMounted(() => {
            axios
                .get(`http://localhost:8080/api/products/${route.params.id}`)
                .then((result) => {
                    products.name = result.data.name;
                    products.description = result.data.description;
                    products.price = result.data.price;
                    products.quantity = result.data.quantity;
                })
                .catch((err) => {
                    console.log(err.response.message);
                });
        });

        return {
            products,
        };
    },
};
</script>

<style></style>

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
                        <h3>Create Product</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="productNameInput" class="form-label"
                                    >Product Name</label
                                >
                                <div class="form-floating">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="productNameInput"
                                        placeholder="Name"
                                        v-model="products.name"
                                    />
                                    <label for="productNameInput"
                                        >Leave a Product Name</label
                                    >
                                </div>
                            </div>
                            <div class="mb-3">
                                <label
                                    for="productDescriptionInput"
                                    class="form-label"
                                    >Product Description</label
                                >
                                <div class="form-floating">
                                    <textarea
                                        class="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style="height: 100px"
                                        v-model="products.description"
                                    ></textarea>
                                    <label for="floatingTextarea2"
                                        >Leave a Descriptions</label
                                    >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label
                                            for="productPriceInput"
                                            class="form-label"
                                            >Product Price</label
                                        >
                                        <div class="form-floating">
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="productPriceInput"
                                                placeholder="Price"
                                                v-model="products.price"
                                            />
                                            <label for="productPriceInput"
                                                >Leave a Product Price</label
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label
                                            for="productQuantityInput"
                                            class="form-label"
                                            >Product Quantity</label
                                        >
                                        <div class="form-floating">
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="productQuantityInput"
                                                placeholder="Quantity"
                                                v-model="products.quantity"
                                            />
                                            <label for="productQuantityInput"
                                                >Leave a Product Quantity</label
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
    setup() {
        const products = reactive({
            name: "",
            description: "",
            price: "",
            quantity: "",
        });

        const router = useRouter();

        function store() {
            axios
                .post("http://localhost:8080/api/products", products)
                .then(() => {
                    router.push({
                        name: "index",
                    });
                })
                .catch((err) => {
                    console.log(err.response.message);
                });
        }

        return {
            products,
            router,
            store,
        };
    },
};
</script>

<style></style>

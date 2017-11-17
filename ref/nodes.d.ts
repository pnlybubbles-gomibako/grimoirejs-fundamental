declare const _default: {
    goml: {
        components: string[];
    };
    scene: {
        components: string[];
    };
    object: {
        components: string[];
    };
    camera: {
        components: string[];
        default: {
            position: number[];
        };
        super: string;
    };
    mesh: {
        components: string[];
        super: string;
    };
    renderer: {
        components: string[];
    };
    geometry: {
        components: string[];
    };
    texture: {
        components: string[];
    };
    material: {
        components: string[];
    };
    "import-material": {
        components: string[];
    };
    "texture-buffer": {
        components: string[];
    };
    "render-buffer": {
        components: string[];
    };
    "render-scene": {
        components: string[];
        default: {
            material: any;
        };
    };
    "render-quad": {
        components: string[];
        default: {
            material: any;
        };
    };
};
export default _default;

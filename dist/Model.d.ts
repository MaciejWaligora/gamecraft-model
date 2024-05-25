/**
 *  Abstract class representing a Model in Game. Model holds state of a GameObject;
 */
export interface ModelConfig {
}
export declare abstract class Model<Tconfig extends ModelConfig> {
    protected _config: Tconfig;
    constructor(config: Tconfig);
    abstract update(data: any): void;
}

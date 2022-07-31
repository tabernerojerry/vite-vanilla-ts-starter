import { Map } from 'ol';
import { describe, expect, it } from 'vitest';
import map from './main';

describe('map', () => {
  it('should initialized with new Map', () => {
    expect(map).toBeInstanceOf(Map);
    expect(map).toBeDefined();
    expect(map.getTarget()).toEqual('map');
    expect(map.getAllLayers()).length(1);
    expect(map.getView().getCenter()).toEqual([0, 0]);
    expect(map.getView().getZoom()).toEqual(5);
  });
});

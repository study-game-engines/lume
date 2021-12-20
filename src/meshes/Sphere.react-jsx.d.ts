import type {Sphere, SphereAttributes} from './Sphere'
import type {ReactElementAttributes} from '@lume/element'
import type {PhongMaterialBehavior, PhongMaterialBehaviorAttributes} from '../behaviors/materials/PhongMaterialBehavior'

// React users can import this to have appropriate types for the element in their JSX markup.
declare global {
	namespace JSX {
		interface IntrinsicElements {
			'lume-sphere': ReactElementAttributes<Sphere, SphereAttributes> &
				ReactElementAttributes<PhongMaterialBehavior, PhongMaterialBehaviorAttributes>
		}
	}
}
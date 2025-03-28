# Avalonia.Rendering.Composition Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_BooleanKeyFrameAnimation">BooleanKeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ColorKeyFrameAnimation">ColorKeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionContainerVisual">CompositionContainerVisual</a></td>
<td>A node in the visual tree that can have children.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionCustomVisual">CompositionCustomVisual</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionCustomVisualHandler">CompositionCustomVisualHandler</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionDrawingSurface">CompositionDrawingSurface</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a></td>
<td>Base class of the composition API representing a node in the visual tree structure. Composition objects are the visual tree structure on which all other features of the composition API use and build on. The API allows developers to define and create one or many <a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a> objects each representing a single node in a Visual tree.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionOptions">CompositionOptions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet</a></td>
<td><a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet</a>s are <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>s that allow storage of key values pairs that can be shared across the application and are not tied to the lifetime of another composition object. <a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet</a>s are most commonly used with animations, where they maintain key-value pairs that are referenced to drive portions of composition animations. <a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet</a>s provide the ability to insert key-value pairs or retrieve a value for a given key. <a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet</a> does not support a delete function – ensure you use <a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet</a> to store values that will be shared across the application.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionSolidColorVisual">CompositionSolidColorVisual</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionSurface">CompositionSurface</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionSurfaceVisual">CompositionSurfaceVisual</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a></td>
<td>The base visual object in the composition visual hierarchy.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionVisualCollection">CompositionVisualCollection</a></td>
<td>A collection of CompositionVisual objects</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Compositor">Compositor</a></td>
<td>The Compositor class manages communication between UI-thread and render-thread parts of the composition engine. It also serves as a factory to create UI-thread parts of various composition objects</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_DoubleKeyFrameAnimation">DoubleKeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ElementComposition">ElementComposition</a></td>
<td>Enables access to composition visual objects that back XAML elements in the XAML composition tree.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_QuaternionKeyFrameAnimation">QuaternionKeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ScalarKeyFrameAnimation">ScalarKeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Vector2KeyFrameAnimation">Vector2KeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Vector3DKeyFrameAnimation">Vector3DKeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Vector3KeyFrameAnimation">Vector3KeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Vector4KeyFrameAnimation">Vector4KeyFrameAnimation</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_VectorKeyFrameAnimation">VectorKeyFrameAnimation</a></td>
<td> </td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject</a></td>
<td>An imported GPU object that's usable by composition APIs<br /><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ICompositionGpuInterop">ICompositionGpuInterop</a></td>
<td><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ICompositionImportableSharedGpuContextImage">ICompositionImportableSharedGpuContextImage</a></td>
<td>An GPU image descriptor obtained from a context from the same share group as one used by the compositor<br /><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ICompositionImportableSharedGpuContextObject">ICompositionImportableSharedGpuContextObject</a></td>
<td>An GPU object descriptor obtained from a context from the same share group as one used by the compositor<br /><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ICompositionImportableSharedGpuContextSemaphore">ICompositionImportableSharedGpuContextSemaphore</a></td>
<td>An GPU semaphore descriptor obtained from a context from the same share group as one used by the compositor<br /><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuImage">ICompositionImportedGpuImage</a></td>
<td>An imported GPU image object that's usable by composition APIs<br /><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_ICompositionImportedGpuSemaphore">ICompositionImportedGpuSemaphore</a></td>
<td>An imported GPU semaphore object that's usable by composition APIs<br /><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionBlendMode">CompositionBlendMode</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionGetValueStatus">CompositionGetValueStatus</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionGpuImportedImageSynchronizationCapabilities">CompositionGpuImportedImageSynchronizationCapabilities</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionGradientExtendMode">CompositionGradientExtendMode</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionStretch">CompositionStretch</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_CompositionTileMode">CompositionTileMode</a></td>
<td> </td>
</tr>
</table>

# ImplicitAnimationCollection Class


A collection of animations triggered when a condition is met.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class ImplicitAnimationCollection : CompositionObject, 
	IDictionary<string, ICompositionAnimationBase>, ICollection<KeyValuePair<string, ICompositionAnimationBase>>, 
	IEnumerable<KeyValuePair<string, ICompositionAnimationBase>>, IEnumerable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class ImplicitAnimationCollection
	Inherits CompositionObject
	Implements IDictionary(Of String, ICompositionAnimationBase), 
	ICollection(Of KeyValuePair(Of String, ICompositionAnimationBase)), IEnumerable(Of KeyValuePair(Of String, ICompositionAnimationBase)), 
	IEnumerable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ImplicitAnimationCollection = 
    class
        inherit CompositionObject
        interface IDictionary<string, ICompositionAnimationBase>
        interface ICollection<KeyValuePair<string, ICompositionAnimationBase>>
        interface IEnumerable<KeyValuePair<string, ICompositionAnimationBase>>
        interface IEnumerable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Animations/ImplicitAnimationCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>  →  ImplicitAnimationCollection</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="T_Avalonia_Rendering_Composition_Animations_ICompositionAnimationBase">ICompositionAnimationBase</a>)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2" target="_blank" rel="noopener noreferrer">IDictionary</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="T_Avalonia_Rendering_Composition_Animations_ICompositionAnimationBase">ICompositionAnimationBase</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2" target="_blank" rel="noopener noreferrer">KeyValuePair</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="T_Avalonia_Rendering_Composition_Animations_ICompositionAnimationBase">ICompositionAnimationBase</a>)), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a></td></tr>
</table>

Implicit animations let you drive animations by specifying trigger conditions rather than requiring the manual definition of animation behavior. They help decouple animation start logic from core app logic. You define animations and the events that should trigger these animations. Currently the only available trigger is animated property change. When expression is used in ImplicitAnimationCollection a special keyword `this.FinalValue` will represent the final value of the animated property that was changed

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_Compositor">Compositor</a></td>
<td>The associated Compositor<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Count">Count</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_ImplicitAnimations">ImplicitAnimations</a></td>
<td>The collection of implicit animations attached to this object.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_IsDisposed">IsDisposed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Item">Item(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Size">Size</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Add">Add(String, ICompositionAnimationBase)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Clear">Clear()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_ContainsKey">ContainsKey(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_GetEnumerator">GetEnumerator()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_GetView">GetView()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_HasKey">HasKey(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Insert">Insert(String, ICompositionAnimationBase)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Lookup">Lookup(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_Remove">Remove(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimation">StartAnimation(String, CompositionAnimation)</a></td>
<td>Connects an animation with the specified property of the object and starts the animation.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimationGroup">StartAnimationGroup(ICompositionAnimationBase)</a></td>
<td>Starts an animation group. The StartAnimationGroup method on CompositionObject lets you start CompositionAnimationGroup. All the animations in the group will be started at the same time on the object.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection_TryGetValue">TryGetValue(String, ICompositionAnimationBase)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations Namespace</a>  

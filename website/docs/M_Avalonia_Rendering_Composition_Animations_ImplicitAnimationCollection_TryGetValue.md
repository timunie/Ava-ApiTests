# TryGetValue Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetValue(
	string key,
	out ICompositionAnimationBase value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetValue ( 
	key As String,
	<OutAttribute> ByRef value As ICompositionAnimationBase
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetValue : 
        key : string * 
        value : ICompositionAnimationBase byref -> bool 
override TryGetValue : 
        key : string * 
        value : ICompositionAnimationBase byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Animations/ImplicitAnimationCollection.cs#L54" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Rendering_Composition_Animations_ICompositionAnimationBase">ICompositionAnimationBase</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2.trygetvalue" target="_blank" rel="noopener noreferrer">IDictionary(TKey, TValue).TryGetValue(TKey, TValue)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection">ImplicitAnimationCollection Class</a>  
<a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations Namespace</a>  


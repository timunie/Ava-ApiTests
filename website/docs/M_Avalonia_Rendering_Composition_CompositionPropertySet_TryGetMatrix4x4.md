# TryGetMatrix4x4 Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CompositionGetValueStatus TryGetMatrix4x4(
	string propertyName,
	out Matrix4x4 value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetMatrix4x4 ( 
	propertyName As String,
	<OutAttribute> ByRef value As Matrix4x4
) As CompositionGetValueStatus
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetMatrix4x4 : 
        propertyName : string * 
        value : Matrix4x4 byref -> CompositionGetValueStatus 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/CompositionPropertySet.cs#L79" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.numerics.matrix4x4" target="_blank" rel="noopener noreferrer">Matrix4x4</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Rendering_Composition_CompositionGetValueStatus">CompositionGetValueStatus</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  


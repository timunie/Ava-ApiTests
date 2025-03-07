# TryGetColor Method




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public CompositionGetValueStatus TryGetColor(
	string propertyName,
	out Color value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetColor ( 
	propertyName As String,
	<OutAttribute> ByRef value As Color
) As CompositionGetValueStatus
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetColor : 
        propertyName : string * 
        value : Color byref -> CompositionGetValueStatus 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/CompositionPropertySet.cs#L73" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Rendering_Composition_CompositionGetValueStatus">CompositionGetValueStatus</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">CompositionPropertySet Class</a>  
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

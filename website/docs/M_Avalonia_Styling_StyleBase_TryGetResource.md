# TryGetResource Method




## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetResource(
	Object key,
	ThemeVariant? themeVariant,
	out Object?? result
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetResource ( 
	key As Object,
	themeVariant As ThemeVariant,
	<OutAttribute> ByRef result As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetResource : 
        key : Object * 
        themeVariant : ThemeVariant * 
        result : Object byref -> bool 
override TryGetResource : 
        key : Object * 
        themeVariant : ThemeVariant * 
        result : Object byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/StyleBase.cs#L78" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="M_Avalonia_Controls_IResourceNode_TryGetResource">IResourceNode.TryGetResource(Object, ThemeVariant, Object)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Styling_StyleBase">StyleBase Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

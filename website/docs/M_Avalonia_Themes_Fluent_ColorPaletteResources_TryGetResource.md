# TryGetResource Method




## Definition
**Namespace:** <a href="N_Avalonia_Themes_Fluent">Avalonia.Themes.Fluent</a>  
**Assembly:** Avalonia.Themes.Fluent (in Avalonia.Themes.Fluent.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override bool TryGetResource(
	Object key,
	ThemeVariant? theme,
	out Object?? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function TryGetResource ( 
	key As Object,
	theme As ThemeVariant,
	<OutAttribute> ByRef value As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetResource : 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
override TryGetResource : 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Themes.Fluent/ColorPaletteResources.cs#L25" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="M_Avalonia_Controls_IResourceNode_TryGetResource">IResourceNode.TryGetResource(Object, ThemeVariant, Object)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Themes_Fluent_ColorPaletteResources">ColorPaletteResources Class</a>  
<a href="N_Avalonia_Themes_Fluent">Avalonia.Themes.Fluent Namespace</a>  


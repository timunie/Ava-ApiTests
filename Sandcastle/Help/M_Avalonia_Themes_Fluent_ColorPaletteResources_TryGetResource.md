# TryGetResource Method




## Definition
**Namespace:** <a href="N_Avalonia_Themes_Fluent">Avalonia.Themes.Fluent</a>  
**Assembly:** Avalonia.Themes.Fluent (in Avalonia.Themes.Fluent.dll) Version: 11.3.999

**C#**
``` C#
public override bool TryGetResource(
	Object key,
	ThemeVariant? theme,
	out Object?? value
)
```
**VB**
``` VB
Public Overrides Function TryGetResource ( 
	key As Object,
	theme As ThemeVariant,
	<OutAttribute> ByRef value As Object
) As Boolean
```
**F#**
``` F#
abstract TryGetResource : 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
override TryGetResource : 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  ThemeVariant</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
IResourceNode.TryGetResource(Object, ThemeVariant, Object)  


## See Also


#### Reference
<a href="T_Avalonia_Themes_Fluent_ColorPaletteResources">ColorPaletteResources Class</a>  
<a href="N_Avalonia_Themes_Fluent">Avalonia.Themes.Fluent Namespace</a>  

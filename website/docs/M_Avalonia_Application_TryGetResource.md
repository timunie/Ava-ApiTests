import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TryGetResource Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetResource(
	Object key,
	ThemeVariant? theme,
	out Object?? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetResource ( 
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Application.cs#L228" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  ThemeVariant</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
IResourceNode.TryGetResource(Object, ThemeVariant, Object)  


## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

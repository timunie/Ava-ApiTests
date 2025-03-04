import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ConfigureFonts Method


Registers an action that is executed with the current font manager.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AppBuilder ConfigureFonts(
	Action<FontManager> action
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ConfigureFonts ( 
	action As Action(Of FontManager)
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ConfigureFonts : 
        action : Action<FontManager> -> AppBuilder 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AppBuilder.cs#L284" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(FontManager)</dt><dd>The action.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
An <a href="T_Avalonia_AppBuilder">AppBuilder</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

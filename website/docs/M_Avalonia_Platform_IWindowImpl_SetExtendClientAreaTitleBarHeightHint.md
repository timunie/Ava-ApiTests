import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SetExtendClientAreaTitleBarHeightHint Method


Sets how big the non-client titlebar area should be.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void SetExtendClientAreaTitleBarHeightHint(
	double titleBarHeight
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub SetExtendClientAreaTitleBarHeightHint ( 
	titleBarHeight As Double
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetExtendClientAreaTitleBarHeightHint : 
        titleBarHeight : float -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/IWindowImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>-1 for platform default, otherwise the height in DIPs.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

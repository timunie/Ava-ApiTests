import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Show Method


Shows the window.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Show(
	bool activate,
	bool isDialog
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Show ( 
	activate As Boolean,
	isDialog As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Show : 
        activate : bool * 
        isDialog : bool -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether to activate the shown window.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Whether the window is being shown as a dialog.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

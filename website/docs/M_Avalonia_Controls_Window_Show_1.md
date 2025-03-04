import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Show(Window) Method


Shows the window as a child of *owner*.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Show(
	Window owner
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Show ( 
	owner As Window
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Show : 
        owner : Window -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Window.cs#L663" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Window">Window</a></dt><dd>Window that will be the owner of the shown window.</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The window has already been closed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Window">Window Class</a>  
<a href="Overload_Avalonia_Controls_Window_Show">Show Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

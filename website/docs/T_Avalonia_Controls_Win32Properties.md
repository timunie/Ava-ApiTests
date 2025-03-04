import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Win32Properties Class


Set of Win32 specific properties and events that allow deeper customization of the application per platform.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class Win32Properties
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class Win32Properties
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type Win32Properties = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/Win32Properties.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Win32Properties</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Win32Properties_AddWindowStylesCallback">AddWindowStylesCallback(TopLevel, Win32Properties.CustomWindowStylesCallback)</a></td>
<td>Adds a callback to set the window's style.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Win32Properties_AddWndProcHookCallback">AddWndProcHookCallback(TopLevel, Win32Properties.CustomWndProcHookCallback)</a></td>
<td>Adds a custom callback for the window's WndProc</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Win32Properties_RemoveWindowStylesCallback">RemoveWindowStylesCallback(TopLevel, Win32Properties.CustomWindowStylesCallback)</a></td>
<td>Removes a callback to set the window's style.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Win32Properties_RemoveWndProcHookCallback">RemoveWndProcHookCallback(TopLevel, Win32Properties.CustomWndProcHookCallback)</a></td>
<td>Removes a custom callback for the window's WndProc</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

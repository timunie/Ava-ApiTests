# ITrayIconImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ITrayIconImpl : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ITrayIconImpl
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ITrayIconImpl = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/ITrayIconImpl.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ITrayIconImpl_MenuExporter">MenuExporter</a></td>
<td>Gets the MenuExporter to allow native menus to be exported to the TrayIcon.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITrayIconImpl_OnClicked">OnClicked</a></td>
<td>Gets or Sets the Action that is called when the TrayIcon is clicked.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITrayIconImpl_SetIcon">SetIcon(IWindowIconImpl)</a></td>
<td>Sets the icon of this tray icon.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITrayIconImpl_SetIsVisible">SetIsVisible(Boolean)</a></td>
<td>Sets if the tray icon is visible or not.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITrayIconImpl_SetToolTipText">SetToolTipText(String)</a></td>
<td>Sets the icon of this tray icon.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

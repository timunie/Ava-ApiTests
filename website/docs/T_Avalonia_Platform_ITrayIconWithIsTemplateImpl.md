# ITrayIconWithIsTemplateImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ITrayIconWithIsTemplateImpl : ITrayIconImpl, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ITrayIconWithIsTemplateImpl
	Inherits ITrayIconImpl, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ITrayIconWithIsTemplateImpl = 
    interface
        interface ITrayIconImpl
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_ITrayIconImpl">ITrayIconImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ITrayIconImpl_MenuExporter">MenuExporter</a></td>
<td>Gets the MenuExporter to allow native menus to be exported to the TrayIcon.<br />(Inherited from <a href="T_Avalonia_Platform_ITrayIconImpl">ITrayIconImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ITrayIconImpl_OnClicked">OnClicked</a></td>
<td>Gets or Sets the Action that is called when the TrayIcon is clicked.<br />(Inherited from <a href="T_Avalonia_Platform_ITrayIconImpl">ITrayIconImpl</a>)</td>
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
<td>Sets the icon of this tray icon.<br />(Inherited from <a href="T_Avalonia_Platform_ITrayIconImpl">ITrayIconImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITrayIconWithIsTemplateImpl_SetIsTemplateIcon">SetIsTemplateIcon(Boolean)</a></td>
<td>Sets if the tray icon has a template/monochrome icon or not.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITrayIconImpl_SetIsVisible">SetIsVisible(Boolean)</a></td>
<td>Sets if the tray icon is visible or not.<br />(Inherited from <a href="T_Avalonia_Platform_ITrayIconImpl">ITrayIconImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ITrayIconImpl_SetToolTipText">SetToolTipText(String)</a></td>
<td>Sets the icon of this tray icon.<br />(Inherited from <a href="T_Avalonia_Platform_ITrayIconImpl">ITrayIconImpl</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

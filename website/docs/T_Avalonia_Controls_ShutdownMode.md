# ShutdownMode Enumeration


Describes the possible values for <a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum ShutdownMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration ShutdownMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ShutdownMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ShutdownMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>OnLastWindowClose</td>
<td>0</td>
<td>Indicates an implicit call to Application.Shutdown when the last window closes.</td>
</tr>
<tr>
<td>OnMainWindowClose</td>
<td>1</td>
<td>Indicates an implicit call to Application.Shutdown when the main window closes.</td>
</tr>
<tr>
<td>OnExplicitShutdown</td>
<td>2</td>
<td>Indicates that the application only exits on an explicit call to Application.Shutdown.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

# WindowCloseReason Enumeration


Specifies the reason that a window was closed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum WindowCloseReason
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration WindowCloseReason
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type WindowCloseReason
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Undefined</td>
<td>0</td>
<td>The cause of the closure was not provided by the underlying platform.</td>
</tr>
<tr>
<td>WindowClosing</td>
<td>1</td>
<td>The window itself was requested to close.</td>
</tr>
<tr>
<td>OwnerWindowClosing</td>
<td>2</td>
<td>The window is closing due to a parent/owner window closing.</td>
</tr>
<tr>
<td>ApplicationShutdown</td>
<td>3</td>
<td>The window is closing due to the application shutting down.</td>
</tr>
<tr>
<td>OSShutdown</td>
<td>4</td>
<td>The window is closing due to the operating system shutting down.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


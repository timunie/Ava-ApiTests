# WindowResizeReason Enumeration


Describes the reason for a <a href="E_Avalonia_Controls_WindowBase_Resized">Resized</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum WindowResizeReason
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration WindowResizeReason
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type WindowResizeReason
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Unspecified</td>
<td>0</td>
<td>The resize reason is unknown or unspecified.</td>
</tr>
<tr>
<td>User</td>
<td>1</td>
<td>The resize was due to the user resizing the window, for example by dragging the window frame.</td>
</tr>
<tr>
<td>Application</td>
<td>2</td>
<td>The resize was initiated by the application, for example by setting one of the sizing- related properties on <a href="T_Avalonia_Controls_Window">Window</a> such as <a href="P_Avalonia_Layout_Layoutable_Width">Width</a> or <a href="P_Avalonia_Layout_Layoutable_Height">Height</a>.</td>
</tr>
<tr>
<td>Layout</td>
<td>3</td>
<td>The resize was initiated by the layout system.</td>
</tr>
<tr>
<td>DpiChange</td>
<td>4</td>
<td>The resize was due to a change in DPI.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


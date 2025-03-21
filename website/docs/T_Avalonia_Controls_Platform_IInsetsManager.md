# IInsetsManager Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IInsetsManager
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IInsetsManager
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IInsetsManager = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/IInsetsManager.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Platform_IInsetsManager_DisplayEdgeToEdge">DisplayEdgeToEdge</a></td>
<td>Gets or sets whether the window draws edge to edge. behind any visibile system bars.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_IInsetsManager_IsSystemBarVisible">IsSystemBarVisible</a></td>
<td>Gets or sets whether the system bars are visible.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_IInsetsManager_SafeAreaPadding">SafeAreaPadding</a></td>
<td>Gets the current safe area padding.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Platform_IInsetsManager_SystemBarColor">SystemBarColor</a></td>
<td>Gets or sets the color of the platform's system bars</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Platform_IInsetsManager_SafeAreaChanged">SafeAreaChanged</a></td>
<td>Occurs when safe area for the current window changes.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  


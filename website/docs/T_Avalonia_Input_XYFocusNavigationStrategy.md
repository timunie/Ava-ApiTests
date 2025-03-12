# XYFocusNavigationStrategy Enumeration


Specifies the disambiguation strategy used for navigating between multiple candidate targets using <a href="F_Avalonia_Input_XYFocus_DownNavigationStrategyProperty">DownNavigationStrategyProperty</a>, <a href="F_Avalonia_Input_XYFocus_LeftNavigationStrategyProperty">LeftNavigationStrategyProperty</a>, <a href="F_Avalonia_Input_XYFocus_RightNavigationStrategyProperty">RightNavigationStrategyProperty</a>, and <a href="F_Avalonia_Input_XYFocus_UpNavigationStrategyProperty">UpNavigationStrategyProperty</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum XYFocusNavigationStrategy
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration XYFocusNavigationStrategy
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type XYFocusNavigationStrategy
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Navigation/XYFocusNavigationStrategy.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Auto</td>
<td>0</td>
<td>Indicates that navigation strategy is inherited from the element's ancestors. If all ancestors have a value of Auto, the fallback strategy is Projection.</td>
</tr>
<tr>
<td>Projection</td>
<td>1</td>
<td>Indicates that focus moves to the first element encountered when projecting the edge of the currently focused element in the direction of navigation.</td>
</tr>
<tr>
<td>NavigationDirectionDistance</td>
<td>2</td>
<td>Indicates that focus moves to the element closest to the axis of the navigation direction.</td>
</tr>
<tr>
<td>RectilinearDistance</td>
<td>3</td>
<td>Indicates that focus moves to the closest element based on the shortest 2D distance (Manhattan metric).</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  


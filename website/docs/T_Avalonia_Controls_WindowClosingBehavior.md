import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# WindowClosingBehavior Enumeration


Describes how the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event behaves in the presence of child windows.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum WindowClosingBehavior
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration WindowClosingBehavior
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type WindowClosingBehavior
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>OwnerAndChildWindows</td>
<td>0</td>
<td>When the owner window is closed, the child windows' <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event will be raised, followed by the owner window's <a href="E_Avalonia_Controls_Window_Closing">Closing</a> events. A child canceling the close will result in the owner Window's close being cancelled.</td>
</tr>
<tr>
<td>OwnerWindowOnly</td>
<td>1</td>
<td>When the owner window is closed, only the owner window's <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event will be raised. This behavior is the same as WPF's.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

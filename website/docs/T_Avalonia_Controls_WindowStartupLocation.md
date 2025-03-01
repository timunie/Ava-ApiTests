import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# WindowStartupLocation Enumeration


Determines the startup location of the window.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum WindowStartupLocation
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration WindowStartupLocation
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type WindowStartupLocation
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Manual</td>
<td>0</td>
<td>The startup location is defined by the Position property.</td>
</tr>
<tr>
<td>CenterScreen</td>
<td>1</td>
<td>The startup location is the center of the screen.</td>
</tr>
<tr>
<td>CenterOwner</td>
<td>2</td>
<td>The startup location is the center of the owner window. If the owner window is not specified, the startup location will be Manual.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

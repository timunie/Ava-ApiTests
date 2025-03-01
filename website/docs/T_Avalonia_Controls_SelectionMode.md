import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectionMode Enumeration


Defines the selection mode for a control which can select multiple items.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum SelectionMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration SelectionMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type SelectionMode
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Single</td>
<td>0</td>
<td>One item can be selected.</td>
</tr>
<tr>
<td>Multiple</td>
<td>1</td>
<td>Multiple items can be selected.</td>
</tr>
<tr>
<td>Toggle</td>
<td>2</td>
<td>Item selection can be toggled by tapping/spacebar.</td>
</tr>
<tr>
<td>AlwaysSelected</td>
<td>4</td>
<td>An item will always be selected as long as there are items to select.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

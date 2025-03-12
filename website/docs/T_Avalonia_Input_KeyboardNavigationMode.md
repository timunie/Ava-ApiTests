# KeyboardNavigationMode Enumeration


Defines the mode of keyboard traversal within a container when the tab or arrow keys are pressed.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum KeyboardNavigationMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration KeyboardNavigationMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type KeyboardNavigationMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyboardNavigationMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Continue</td>
<td>0</td>
<td>Items in the container will be cycled through, and focus will be moved to the previous/next container after the first/last control in the container.</td>
</tr>
<tr>
<td>Cycle</td>
<td>1</td>
<td>Items in the container will be cycled through, and moving past the first or last control in the container will cause the last/first control to be focused.</td>
</tr>
<tr>
<td>Contained</td>
<td>2</td>
<td>Items in the container will be cycled through and focus will stop moving when the edge of the container is reached.</td>
</tr>
<tr>
<td>Once</td>
<td>3</td>
<td>When focus is moved into the container, the control described by the <a href="F_Avalonia_Input_KeyboardNavigation_TabOnceActiveElementProperty">TabOnceActiveElementProperty</a> attached property on the container will be focused. When focus moves away from this control, focus will move to the previous/next container.</td>
</tr>
<tr>
<td>None</td>
<td>4</td>
<td>The container's children will not be focused when using the tab key.</td>
</tr>
<tr>
<td>Local</td>
<td>5</td>
<td>TabIndexes are considered on local subtree only inside this container</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  


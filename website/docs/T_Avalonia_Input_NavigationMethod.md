# NavigationMethod Enumeration


Defines the method by which a focus change occurred.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum NavigationMethod
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration NavigationMethod
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type NavigationMethod
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/NavigationMethod.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Unspecified</td>
<td>0</td>
<td>The focus was changed by an unspecified method, e.g. calling <a href="M_Avalonia_Input_InputElement_Focus">Focus(NavigationMethod, KeyModifiers)</a>.</td>
</tr>
<tr>
<td>Tab</td>
<td>1</td>
<td>The focus was changed by the user tabbing between control.</td>
</tr>
<tr>
<td>Directional</td>
<td>2</td>
<td>The focus was changed by the user pressing a directional navigation key.</td>
</tr>
<tr>
<td>Pointer</td>
<td>3</td>
<td>The focus was changed by a pointer click.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  


# IPseudoClasses Interface


Exposes an interface for setting pseudoclasses on a <a href="T_Avalonia_Controls_Classes">Classes</a> collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPseudoClasses
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPseudoClasses
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPseudoClasses = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/IPseudoClasses.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IPseudoClasses_Add">Add(String)</a></td>
<td>Adds a pseudoclass to the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_IPseudoClasses_Contains">Contains(String)</a></td>
<td>Returns whether a pseudoclass is present in the collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_IPseudoClasses_Remove">Remove(String)</a></td>
<td>Removes a pseudoclass from the collection.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_PseudolassesExtensions_Set">Set(String, Boolean)</a></td>
<td>Adds or removes a pseudoclass depending on a boolean value.<br />(Defined by <a href="T_Avalonia_Controls_PseudolassesExtensions">PseudolassesExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_Set">Set(String, IObservable(Boolean))</a></td>
<td>Sets a pseudoclass depending on an observable trigger.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

# IDataObject Interface


Interface to access information about the data of a drag-and-drop operation.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IDataObject
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IDataObject
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IDataObject = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IDataObject.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_IDataObject_Contains">Contains(String)</a></td>
<td>Checks whether a given DataFormat is present in this object </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_IDataObject_Get">Get(String)</a></td>
<td>Tries to get the data of the given DataFormat.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_IDataObject_GetDataFormats">GetDataFormats()</a></td>
<td>Lists all formats which are present in the DataObject. </td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_DataObjectExtensions_GetFiles">GetFiles()</a></td>
<td>Returns a list of files if the DataObject contains files or filenames. .<br />(Defined by <a href="T_Avalonia_Input_DataObjectExtensions">DataObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_DataObjectExtensions_GetText">GetText()</a></td>
<td>Returns the dragged text if the DataObject contains any text. <br />(Defined by <a href="T_Avalonia_Input_DataObjectExtensions">DataObjectExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

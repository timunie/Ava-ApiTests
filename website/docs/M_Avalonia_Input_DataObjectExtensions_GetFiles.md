# GetFiles Method


Returns a list of files if the DataObject contains files or filenames. .



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IEnumerable<IStorageItem>? GetFiles(
	this IDataObject dataObject
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetFiles ( 
	dataObject As IDataObject
) As IEnumerable(Of IStorageItem)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetFiles : 
        dataObject : IDataObject -> IEnumerable<IStorageItem> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/DataObjectExtensions.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IDataObject">IDataObject</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)  
Collection of storage items - files or folders. If format isn't available, returns null.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_IDataObject">IDataObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_DataObjectExtensions">DataObjectExtensions Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
<a href="F_Avalonia_Input_DataFormats_Files">Files</a>  


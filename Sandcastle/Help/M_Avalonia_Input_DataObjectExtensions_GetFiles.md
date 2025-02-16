---
title:GetFiles Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetFiles Method




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IEnumerable<IStorageItem>? GetFiles(
	this IDataObject dataObject
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetFiles ( 
	dataObject As IDataObject
) As IEnumerable(Of IStorageItem)
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetFiles : 
        dataObject : IDataObject -> IEnumerable<IStorageItem> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IDataObject">IDataObject</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_IDataObject">IDataObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_DataObjectExtensions">DataObjectExtensions Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

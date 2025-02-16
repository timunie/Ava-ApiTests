---
title:TryGetFolderFromPathAsync Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryGetFolderFromPathAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static Task<IStorageFolder?> TryGetFolderFromPathAsync(
	this IStorageProvider provider,
	string folderPath
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function TryGetFolderFromPathAsync ( 
	provider As IStorageProvider,
	folderPath As String
) As Task(Of IStorageFolder)
```
**F#**
``` F#
[<ExtensionAttribute>]
static member TryGetFolderFromPathAsync : 
        provider : IStorageProvider * 
        folderPath : string -> Task<IStorageFolder> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

---
title:OpenFolderPickerAsync Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# OpenFolderPickerAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
Task<IReadOnlyList<IStorageFolder>> OpenFolderPickerAsync(
	FolderPickerOpenOptions options
)
```
**VB**
``` VB
Function OpenFolderPickerAsync ( 
	options As FolderPickerOpenOptions
) As Task(Of IReadOnlyList(Of IStorageFolder))
```
**F#**
``` F#
abstract OpenFolderPickerAsync : 
        options : FolderPickerOpenOptions -> Task<IReadOnlyList<IStorageFolder>> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_FolderPickerOpenOptions">FolderPickerOpenOptions</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>))

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

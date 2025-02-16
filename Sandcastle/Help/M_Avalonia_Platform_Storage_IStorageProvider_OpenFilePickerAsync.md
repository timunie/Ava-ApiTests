---
title:OpenFilePickerAsync Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# OpenFilePickerAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
Task<IReadOnlyList<IStorageFile>> OpenFilePickerAsync(
	FilePickerOpenOptions options
)
```
**VB**
``` VB
Function OpenFilePickerAsync ( 
	options As FilePickerOpenOptions
) As Task(Of IReadOnlyList(Of IStorageFile))
```
**F#**
``` F#
abstract OpenFilePickerAsync : 
        options : FilePickerOpenOptions -> Task<IReadOnlyList<IStorageFile>> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_FilePickerOpenOptions">FilePickerOpenOptions</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a>))

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

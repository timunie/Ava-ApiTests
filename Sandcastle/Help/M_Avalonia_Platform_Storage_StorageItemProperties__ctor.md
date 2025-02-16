---
title:StorageItemProperties Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# StorageItemProperties Constructor


Initializes a new instance of the <a href="T_Avalonia_Platform_Storage_StorageItemProperties">StorageItemProperties</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public StorageItemProperties(
	ulong? size = null,
	DateTimeOffset? dateCreated = null,
	DateTimeOffset? dateModified = null
)
```
**VB**
``` VB
Public Sub New ( 
	Optional size As ULong? = Nothing,
	Optional dateCreated As DateTimeOffset? = Nothing,
	Optional dateModified As DateTimeOffset? = Nothing
)
```
**F#**
``` F#
new : 
        ?size : Nullable<uint64> * 
        ?dateCreated : Nullable<DateTimeOffset> * 
        ?dateModified : Nullable<DateTimeOffset> 
(* Defaults:
        let _size = defaultArg size null
        let _dateCreated = defaultArg dateCreated null
        let _dateModified = defaultArg dateModified null
*)
-> StorageItemProperties
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset" target="_blank" rel="noopener noreferrer">DateTimeOffset</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset" target="_blank" rel="noopener noreferrer">DateTimeOffset</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_StorageItemProperties">StorageItemProperties Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

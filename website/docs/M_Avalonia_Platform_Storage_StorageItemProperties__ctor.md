# StorageItemProperties Constructor


Initializes a new instance of the <a href="T_Avalonia_Platform_Storage_StorageItemProperties">StorageItemProperties</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public StorageItemProperties(
	ulong? size = null,
	DateTimeOffset? dateCreated = null,
	DateTimeOffset? dateModified = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	Optional size As ULong? = Nothing,
	Optional dateCreated As DateTimeOffset? = Nothing,
	Optional dateModified As DateTimeOffset? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/StorageItemProperties.cs#L10" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset" target="_blank" rel="noopener noreferrer">DateTimeOffset</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset" target="_blank" rel="noopener noreferrer">DateTimeOffset</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_StorageItemProperties">StorageItemProperties Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  


# ClrPropertyInfo Constructor


Initializes a new instance of the <a href="T_Avalonia_Data_Core_ClrPropertyInfo">ClrPropertyInfo</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ClrPropertyInfo(
	string name,
	Func<Object, Object?>? getter,
	Action<Object, Object?>? setter,
	Type propertyType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	name As String,
	getter As Func(Of Object, Object),
	setter As Action(Of Object, Object),
	propertyType As Type
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        name : string * 
        getter : Func<Object, Object> * 
        setter : Action<Object, Object> * 
        propertyType : Type -> ClrPropertyInfo
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/ClrPropertyInfo.cs#L11" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_ClrPropertyInfo">ClrPropertyInfo Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  


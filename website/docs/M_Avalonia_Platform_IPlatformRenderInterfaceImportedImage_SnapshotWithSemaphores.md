# SnapshotWithSemaphores Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IBitmapImpl SnapshotWithSemaphores(
	IPlatformRenderInterfaceImportedSemaphore waitForSemaphore,
	IPlatformRenderInterfaceImportedSemaphore signalSemaphore
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function SnapshotWithSemaphores ( 
	waitForSemaphore As IPlatformRenderInterfaceImportedSemaphore,
	signalSemaphore As IPlatformRenderInterfaceImportedSemaphore
) As IBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SnapshotWithSemaphores : 
        waitForSemaphore : IPlatformRenderInterfaceImportedSemaphore * 
        signalSemaphore : IPlatformRenderInterfaceImportedSemaphore -> IBitmapImpl 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedSemaphore">IPlatformRenderInterfaceImportedSemaphore</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedSemaphore">IPlatformRenderInterfaceImportedSemaphore</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedImage">IPlatformRenderInterfaceImportedImage Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

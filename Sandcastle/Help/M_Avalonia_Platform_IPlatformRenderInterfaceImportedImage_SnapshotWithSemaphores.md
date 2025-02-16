---
title:SnapshotWithSemaphores Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# SnapshotWithSemaphores Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IBitmapImpl SnapshotWithSemaphores(
	IPlatformRenderInterfaceImportedSemaphore waitForSemaphore,
	IPlatformRenderInterfaceImportedSemaphore signalSemaphore
)
```
**VB**
``` VB
Function SnapshotWithSemaphores ( 
	waitForSemaphore As IPlatformRenderInterfaceImportedSemaphore,
	signalSemaphore As IPlatformRenderInterfaceImportedSemaphore
) As IBitmapImpl
```
**F#**
``` F#
abstract SnapshotWithSemaphores : 
        waitForSemaphore : IPlatformRenderInterfaceImportedSemaphore * 
        signalSemaphore : IPlatformRenderInterfaceImportedSemaphore -> IBitmapImpl 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedSemaphore">IPlatformRenderInterfaceImportedSemaphore</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedSemaphore">IPlatformRenderInterfaceImportedSemaphore</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedImage">IPlatformRenderInterfaceImportedImage Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
